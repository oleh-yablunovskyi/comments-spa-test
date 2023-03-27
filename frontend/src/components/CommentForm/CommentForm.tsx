/* eslint-disable no-console */
import React, { useState } from 'react';
import './CommentForm.scss';

interface FormData {
  userName: string;
  email: string;
  homePage: string;
  message: string;
  image: File | null;
  textFile: File | null;
}

const initialFormData: FormData = {
  userName: '',
  email: '',
  homePage: '',
  message: '',
  image: null,
  textFile: null,
};

export const CommentForm = () => {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);

    setCount((prevCount => prevCount + 1));
    resetFormData();
  };

  return (
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="Form__group">
        <label htmlFor="message" className="Form__label">
          <p className="Form__caption">Text (required):</p>
        </label>

        <div className="Form__messageBlock">
          <div className="Form__tagPanel">
            <button type="button" className="Form__tagButton" data-tag="i">i</button>
            <button type="button" className="Form__tagButton" data-tag="strong">strong</button>
            <button type="button" className="Form__tagButton" data-tag="code">code</button>
            <button type="button" className="Form__tagButton" data-tag="a">a</button>
          </div>

          <textarea
            id="message"
            required
            className="Form__textarea"
            onChange={handleChange}
          >
          </textarea>
        </div>
      </div>

      <div className="Form__group">
        <label htmlFor="image" className="Form__label">

          <p className="Form__caption">Upload Image (JPG, GIF, PNG, max 320x240px):</p>

          <input
            type="file"
            id="image"
            accept="image/jpeg,image/gif,image/png"
            className="Form__input Form__inputFile"
          />
        </label>
      </div>

      <div className="Form__group">
        <label htmlFor="textfile" className="Form__label">
          <p className="Form__caption">Upload Text File (TXT, max 100KB):</p>

          <input
            type="file"
            id="textFile"
            accept=".txt"
            className="Form__input Form__inputFile"
          />
        </label>
      </div>
      <button type="submit" className="Form__submit">Submit</button>
    </form>
  );
};
