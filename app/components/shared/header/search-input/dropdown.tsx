import React from 'react';
import SimpleBar from 'simplebar-react';

interface Props {
  query: string;
}

const DropDown: React.FC<Props> = ({ query }) => {
  const highlightQuery = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="text-[#375CE7]">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <section className="absolute top-[100%] w-full flex flex-col p-4 bg-white text-black">
      <SimpleBar className="flex flex-col max-h-[10vh]">
        <p>{highlightQuery('چاپ نامفهوم صنعت', query)}</p>
        <p className="mt-1">
          {highlightQuery('تولید سادگی نامفهوم صنعت چاپ', query)}
        </p>
        <p className="mt-1">
          {highlightQuery(
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم صنعت چاپ',
            query
          )}
        </p>
        <p className="mt-1">
          {highlightQuery(
            'ایپسوم متن ساختگی صنعت چاپ با تولید سادگی نامفهوم ',
            query
          )}
        </p>
      </SimpleBar>
    </section>
  );
};

export default DropDown;
