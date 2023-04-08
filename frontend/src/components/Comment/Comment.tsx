/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './Comment.scss';
import Modal from 'react-responsive-modal';
import { CommentType } from '../../types/CommentType';
import { commentsApi } from '../../api/comments';
import { CommentForm } from '../CommentForm/CommentForm';
import { Loader } from '../Loader/Loader';

const BASE_URL = 'https://comments-spa-test.onrender.com';

interface Props {
  comment: CommentType;
  level: number;
}

export const Comment: React.FC<Props> = React.memo(({ comment, level }) => {
  const [childrenComments, setChildrenComments] = useState<CommentType[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isTextModalOpen, setTextModalOpen] = useState(false);
  const [textModalContent, setTextModalContent] = useState('');

  const { id, image_link, text_file_link } = comment;

  const loadChildrenComments = async () => {
    try {
      const comments = await commentsApi.getChildrenCommentsByID(id);

      setChildrenComments(comments);
    } catch (error) {
      console.error(`Error loading comments for comment with id ${id}:`, error);
    }
  };

  useEffect(() => {
    loadChildrenComments();
  }, [id]);

  const handleImageClick = () => {
    setImageModalOpen(true);
  };

  const handleTextFileClick = async () => {
    setTextModalOpen(true);

    try {
      const response = await fetch(`${BASE_URL}/${text_file_link}`);
      const text = await response.text();

      setTextModalContent(text);
    } catch (error) {
      console.error('Error loading text file:', error);
    }
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  const closeTextModal = () => {
    setTextModalOpen(false);
  };

  return (
    <>
      <div className={`Comment Comment--level-${level}`}>
        <div className="Comment__wrapper">
          <img
            className="Comment__avatar"
            src={`https://avatars.dicebear.com/api/human/${id}.svg`}
            alt=""
          />

          <div className="Comment__body">
            <div className="Comment__header">
              <span className="Comment__authorName">
                {comment.author.user_name}
              </span>

              <span className="Comment__date">
                {new Date(comment.created_at).toLocaleString()}
              </span>
            </div>

            <p
              className="Comment__text"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            />

            {(image_link || text_file_link) && (
              <div className="Comment__attachments">
                <span>Files attached:</span>

                {image_link && (
                  <img
                    className="Comment__attachedImage"
                    src={`${BASE_URL}/${image_link}`}
                    alt="Attached"
                    onClick={handleImageClick}
                  />
                )}

                {text_file_link && (
                  <div
                    className="Comment__fileIcon"
                    onClick={handleTextFileClick}
                  >
                  </div>
                )}
              </div>
            )}

            <>
              {isImageModalOpen && (
                <Modal
                  open={isImageModalOpen}
                  onClose={closeImageModal}
                  center
                  classNames={{
                    modal: 'Modal',
                    overlay: 'Modal__overlay',
                    modalAnimationIn: 'Modal__animation',
                    overlayAnimationIn: 'Modal__animation',
                  }}
                  animationDuration={800}
                >
                  <img src={`${BASE_URL}/${image_link}`} alt="Attachment" />
                </Modal>
              )}

              {isTextModalOpen && (
                <Modal
                  open={isTextModalOpen}
                  onClose={closeTextModal}
                  center
                  classNames={{
                    modal: 'Modal',
                    overlay: 'Modal__overlay',
                    modalAnimationIn: 'Modal__animation',
                    overlayAnimationIn: 'Modal__animation',
                  }}
                  animationDuration={800}
                >
                  {textModalContent
                    ? (
                      <pre>{textModalContent}</pre>
                    )
                    : (
                      <Loader />
                    )}
                </Modal>
              )}
            </>
          </div>
        </div>

        <button
          type="button"
          className="Comment__answerButton"
          onClick={() => setShowForm((prevState) => !prevState)}
        >
          {showForm ? '— Answer' : 'Answer'}
        </button>

        {showForm && (
          <CommentForm
            onSubmitLoadComments={loadChildrenComments}
            onSubmitHideForm={() => setShowForm(false)}
            parentId={id.toString()}
          />
        )}
      </div>

      <>
        {childrenComments.length > 0 && (
          <>
            {childrenComments.map((childComment) => (
              <Comment
                comment={childComment}
                level={level < 10 ? level + 1 : level}
                key={childComment.id}
              />
            ))}
          </>
        )}
      </>
    </>
  );
});
