import sanitizeHtml from 'sanitize-html';
import he from 'he';

export const sanitizeMessage = (message: string): string => {
  // Decode the characters escaped by ReactQuill
  const decodedMessage = he.decode(message);

  const sanitizedMessage = sanitizeHtml(decodedMessage, {
    allowedTags: ['a', 'pre', 'code', 'em', 'strong'],
    allowedAttributes: {
      a: ['href', 'title'],
    },
    exclusiveFilter: (frame) => {
      return !frame.text.trim();
    },
  });

  return sanitizedMessage;
};
