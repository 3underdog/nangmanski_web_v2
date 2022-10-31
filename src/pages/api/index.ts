import axios from 'axios';
import FormData from 'form-data';

import { apiUrl } from '@/constant/env';

// 내큐찾기 상품 리스트 및 상세
export const getCueList = async (
  offset = 0,
  isPremeium = false,
  isSet = false,
  isShaft = false,
  isButt = false,
  isBuying = false,
  document_id = ''
) => {
  const element_type = isSet
    ? 'set'
    : isButt
    ? 'lower'
    : isShaft
    ? 'upper'
    : '';
  const _isPremeium = isPremeium ? 'true' : '';
  const _isBuying = isBuying ? 'buying' : '';
  const _document_id =
    document_id.length > 0
      ? '&document_id=CUE-' +
        document_id.replace('-', '').replace('CUE', '').replace(' ', '')
      : '';
  const { data } = await axios.get(
    `${apiUrl}/goods/web/v3/?limit=10&isPremium=${_isPremeium}&element_type=${element_type}&state=${_isBuying}&offset=${offset}${_document_id}`
  );
  return data;
};

// 커뮤니티 게시글 리스트
export const getPostList = async (offset = 0, keyword = '') => {
  const _keyword = keyword.length > 0 ? `&keyword=${keyword}` : '';
  const { data } = await axios.get(
    `${apiUrl}/post/web/v3/?limit=10&offset=${offset}${_keyword}`
  );
  return data;
};

// 커뮤니티 게시글 상세
export const getPostDetail = async (id = '') => {
  const { data } = await axios.get(`${apiUrl}/post/web/v3/?id=${id}`);
  return data;
};

// 커뮤니티 게시글 등록 category id = 11 자유게시판 고정
// TODO: images 등록 수정 추가필요 현재는 빈 배열로 전송
export const postArticle = async (
  accessToken: string,
  title: string,
  content: string
) => {
  await axios({
    method: 'POST',
    url: `${apiUrl}/post/`,
    data: {
      category: '11',
      title: title,
      content: content,
      images: [],
    },
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  });
};

// 커뮤니티 게시글 수정 category id = 11 자유게시판 고정
// TODO: images 등록 수정 추가필요 현재는 빈 배열로 전송
export const editArticle = async (
  accessToken: string,
  id: string,
  title: string,
  content: string
) => {
  await axios({
    method: 'PATCH',
    url: `${apiUrl}/post/${id}/`,
    data: {
      category: '11',
      title: title,
      content: content,
      images: [],
    },
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  });
};

// 커뮤니티 게시글 삭제
export const deleteArticle = async (accessToken: string, id: string) => {
  await axios({
    method: 'DELETE',
    url: `${apiUrl}/post/${id}/`,
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  });
};

// 커뮤니티 댓글 등록
export const postComment = async (
  accessToken: string,
  post_id: string,
  content: string,
  comment_id: string
) => {
  let data = {};
  if (comment_id === '') {
    data = {
      post_id: post_id,
      content: content,
    };
  } else {
    data = {
      post_id: post_id,
      content: content,
      comment_id: comment_id,
    };
  }
  await axios({
    method: 'POST',
    url: `${apiUrl}/post/comment/`,
    data: data,
    headers: {
      Authorization: `JWT ${accessToken}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 커뮤니티 댓글 삭제
export const deleteComment = async (
  accessToken: string,
  comment_id: string
) => {
  await axios({
    method: 'DELETE',
    url: `${apiUrl}/post/comment/${comment_id}/`,
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  });
};

// 유저 로그인시 토큰 가져오기
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAccessToken = async (credentials: any) => {
  const newFormData = new FormData();
  newFormData.append('phone', credentials.phonenumber.replace(/-/gi, ''));
  newFormData.append('password', credentials.password);
  const { data } = await axios.post(`${apiUrl}/users/token/web/`, newFormData);
  if (data.token) {
    // eslint-disable-next-line no-console
    console.log('getAccessToken : ', data.token);
  }
  return data.token;
};

// 유저 토큰으로 유저정보 가져오기
export const getUserInformationByToken = async (accessToken: string) => {
  // eslint-disable-next-line no-console
  console.log('Get User Info');
  const { data } = await axios.get(`${apiUrl}/users/myInfo/`, {
    headers: {
      Authorization: `JWT ${accessToken}`,
    },
  });
  if (data) {
    // eslint-disable-next-line no-console
    console.log('getUserInformationByToken : ', data);
  }
  return data;
};

// TODO: NICE 본인인증으로 로그인
export const niceID = async () => {
  const { data } = await axios.get(`${apiUrl}/certified/`);
  return data;
};
