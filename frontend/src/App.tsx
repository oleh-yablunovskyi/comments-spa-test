/* eslint-disable max-len */
import React from 'react';
import './App.scss';

// import comments from './mockup_data/comments.json';

// interface Comment {
//   id: number;
//   parentId: number | null;
//   userId: number;
//   text: string;
//   createdAt: string;
//   imageLink: string | null;
//   textFileLink: string | null;
// }

export const App: React.FC = () => {
  return (
    <div className="container">
      <div className="CommentsApp">
        <h1 className="CommentsApp__title">Comments</h1>

        <table className="CommentsTable">
          <tbody>
            <tr>
              <td>
                <div className="Comment">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment Comment--nesting--1">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment Comment--nesting--2">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment Comment--nesting--3">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment Comment--nesting--4">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment Comment--nesting--4">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="Comment">
                  <div className="Comment__header">
                    <span className="Comment__author_name">
                      Anonym
                    </span>
                    <span className="Comment__date">
                      22.05.22 at 22:30
                    </span>
                  </div>

                  <p className="Comment__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio velit voluptates vitae magni similique quos, perferendis totam iusto ipsa.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
