/* eslint-disable no-console */
import React, { useState } from 'react';
import './CommentForm.scss';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import sanitizeHtml from 'sanitize-html';
import he from 'he';

import { Loader } from '../Loader/Loader';
import { FormDataType } from '../../types/FormDataType';
import { commentsApi } from '../../api/comments';

interface Props {
  onSubmitLoadComments: () => Promise<void>;
  onSubmitHideForm?: () => void;
  parentId?: string | null;
}

const initialFormData: FormDataType = {
  userName: '',
  email: '',
  homePage: '',
  message: '',
  parentId: null,
  imageFile: null,
  textFile: null,
};

export const CommentForm: React.FC<Props> = ({
  onSubmitLoadComments,
  onSubmitHideForm,
  parentId = null,
}) => {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  const modules = {
    toolbar: [
      ['bold', 'italic'],
      ['link'],
      ['code-block'],
    ],
  };

  const formats = ['bold', 'italic', 'link', 'code-block'];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleMessageChange = (value: React.SetStateAction<string>) => {
    setMessage(value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    const imageFile = files ? files[0] : null;

    if (imageFile) {
      setFormData((prevData) => ({ ...prevData, imageFile }));
    }
  };

  const handleTextFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    const textFile = files ? files[0] : null;

    if (textFile) {
      setFormData((prevData) => ({ ...prevData, textFile }));
    }
  };

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Decode the characters escaped by ReactQuill
    const decodedMessage = he.decode(message);

    const sanitizedMessage = sanitizeHtml(decodedMessage, {
      allowedTags: ['a', 'pre', 'code', 'em', 'strong'],
      allowedAttributes: {
        a: ['href', 'title'],
      },
      // exclusiveFilter: (frame) => {
      //   return !frame.text.trim();
      // },

      exclusiveFilter: (frame) => {
        if (frame.tag === 'i' || frame.tag === 'strong') {
          return false;
        }

        return !frame.text.trim();
      },
    });

    // Process the sanitized HTML content
    console.log('sanitizedMessage when submitting:', sanitizedMessage);

    const updatedFormData = {
      ...formData,
      parentId,
      message: sanitizedMessage,
    };

    console.log('updatedFormData when submitting:', updatedFormData);

    const payload = new FormData();

    Object.entries(updatedFormData).forEach(([key, value]) => {
      if (value !== null) {
        payload.append(key, value);
      }
    });

    await commentsApi.createComment(payload);
    await onSubmitLoadComments();

    setCount((prevCount => prevCount + 1));
    resetFormData();
    setIsLoading(false);

    if (onSubmitHideForm) {
      onSubmitHideForm();
    }
  };

  return (
    <>
      {isLoading
        ? (
          <Loader />
        )
        : (
          <form className="Form" onSubmit={handleSubmit} key={count}>
            <h2 className="Form__title">Add Your Comment</h2>
            <div className="Form__group">
              <label htmlFor="username" className="Form__label">
                <p className="Form__caption">User Name (required):</p>

                <input
                  type="text"
                  id="userName"
                  required
                  pattern="[A-Za-z0-9 ]+"
                  className="Form__input"
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="Form__group">
              <label htmlFor="email" className="Form__label">
                <p className="Form__caption">E-mail (required):</p>

                <input
                  type="email"
                  id="email"
                  required
                  className="Form__input"
                  onChange={handleInputChange}
                />
              </label>

            </div>

            <div className="Form__group">
              <label htmlFor="homepage" className="Form__label">
                <p className="Form__caption">Home page (optional):</p>

                <input
                  type="url"
                  id="homePage"
                  className="Form__input"
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="Form__group">
              <label htmlFor="message" className="Form__label">
                <p className="Form__caption">Text (required):</p>
              </label>

              <div className="Form__messageBlock">
                <ReactQuill
                  value={message}
                  onChange={handleMessageChange}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                />
              </div>
            </div>

            <div className="Form__group">
              <label htmlFor="imageFile" className="Form__label">
                <p className="Form__caption">
                  Upload Image (JPG, GIF, PNG, max 320x240px):
                </p>

                <input
                  type="file"
                  id="imageFile"
                  accept="image/jpeg,image/gif,image/png"
                  className="Form__input Form__inputFile"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <div className="Form__group">
              <label htmlFor="textFile" className="Form__label">
                <p className="Form__caption">
                  Upload Text File (TXT, max 100KB):
                </p>

                <input
                  type="file"
                  id="textFile"
                  accept=".txt"
                  className="Form__input Form__inputFile"
                  onChange={handleTextFileUpload}
                />
              </label>
            </div>

            <button type="submit" className="Form__submitButton">Submit</button>
          </form>
        )}
    </>
  );
};
