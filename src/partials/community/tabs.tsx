import React, { Dispatch, SetStateAction } from 'react';

function PostTabs({
  keyword,
  setKeyword,
  setIsRefreshing,
}: {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
}) {
  const goFirstPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const keywordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toUpperCase());
  };
  const keywordSearchClicked = () => {
    goFirstPage();
    setIsRefreshing(true);
  };

  return (
    <section className='relative'>
      <div className='h5 bg-[#f6f6f6] py-2 md:py-3'>
        <div className='layout flex flex-row flex-wrap'>
          <div className='flex flex-1 flex-row-reverse'>
            <div className='h6 h4 flex h-10 w-full select-none flex-row-reverse items-center pt-[2px] text-[#a8aaa8]'>
              <button
                onClick={() => keywordSearchClicked()}
                className='h6 mb-[2px] ml-2 w-16 rounded-md bg-pink-500 px-3 pt-[2px] text-white md:hover:bg-pink-600'
              >
                검색
              </button>
              <input
                className='h6 placeholder:h6 mx-2 mb-[2px] w-full rounded-md border-[1px] px-2 pt-[1px] text-gray-800 placeholder:leading-6 placeholder:text-[#a8aaa8]  hover:bg-gray-50 focus:border-transparent focus:outline-pink-500 focus:ring-0 md:w-80'
                placeholder='검색어를 입력해주세요 (작성자, 내용, 제목)'
                value={keyword}
                onClick={() => {
                  if (keyword.length > 0) {
                    setKeyword('');
                    setIsRefreshing(true);
                  }
                }}
                onChange={(e) => keywordOnChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PostTabs;
