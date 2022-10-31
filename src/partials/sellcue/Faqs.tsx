import React from 'react';

import Accordion from '@/utils/Accordion';

function Faqs() {
  return (
    <section>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='border-t border-gray-200 py-12 md:py-20'>
          {/* Section header */}
          <div className='mx-auto max-w-3xl pb-12 text-center md:pb-20'>
            <h2 className='h2'>자주묻는질문</h2>
          </div>

          {/* Faqs */}
          <ul className='mx-auto max-w-3xl pl-12'>
            <div className='h3 pb-2 md:py-4 '>등록하기</div>
            <Accordion title='[등록] 제 큐는 얼마일까요?' active>
              큐찾사 검수 담당자가 직접 연락드려 평균 시세와 검수 내용을 토대로
              가격 상담이 진행됩니다. 검수 담당자가 제안드리는 가격대에서
              원하시는 금액으로 진행이 가능합니다. 등록 이후 상황을 보고
              언제든지 가격을 조정할 수 있습니다.
            </Accordion>
            <Accordion title='[등록] 모든 브랜드 큐를 판매할 수 있나요?'>
              김치빌리아드에서 취급하는 롱고니, 인빗큐, 버팔로 브랜드 외 모든
              브랜드의 큐 등록이 가능합니다.
            </Accordion>
            <Accordion title='[등록] 앱 사용이 어렵습니다. 대신 등록해주실 수 있나요?'>
              큐찾사 회원이시라면 언제든지 큐를 큐찾사로 보내주시기만 하면 이후
              과정은 전부 큐찾사에 맡겨주시면 됩니다. <br />
              단, 회원가입은 민감한 개인정보가 포함되어 있기 때문에 앱을 통해
              직접 진행해주셔야 합니다.
            </Accordion>
            <Accordion title='[등록] 큐 상태가 너무 안좋아도 판매가 될까요?'>
              컨디션에 따라 판매가 거부될 수 있습니다. 큐찾사에서 수리 이후
              판매가 가능할 것으로 판단될 경우에는 고객님과 상담 진행후 수리가
              진행 될 수 있습니다.
            </Accordion>
            <span
              className='block border-t border-gray-200'
              aria-hidden='true'
            ></span>
          </ul>

          <ul className='mx-auto mt-10 max-w-3xl pl-12'>
            <div className='h3 py-2 md:py-4 '>판매하기</div>
            <Accordion title='[판매] 네고 요청이 있을 경우엔 어떻게 되나요?'>
              구매자는 판매자의 개인정보를 알 수 없습니다. 구매자의 모든 질문 및
              네고는 큐찾사 담당자와 진행됩니다. 구매자의 네고요청이 있을
              경우에는 판매자에게 직접 연락드려 결정합니다.
            </Accordion>
            <Accordion title='[판매] 판매 중간에 큐를 돌려받을 수 있나요?'>
              언제든지 큐찾사 고객센터로 연락주시면 큐를 돌려받으실 수 있습니다.
              단, 택배로 돌려받으실 경우에는 택배비가 부과됩니다.
            </Accordion>
            <Accordion title='[판매] 제가 등록한 큐는 어디에 보관되나요?'>
              등록되는 모든 상품은 김치빌리아드 교대점 매장에서 24시간
              온도/습도가 유지된 환경에서 안전히 보관됩니다.
            </Accordion>
            <span
              className='block border-t border-gray-200'
              aria-hidden='true'
            ></span>
          </ul>

          <ul className='mx-auto mt-10 max-w-3xl pl-12'>
            <div className='h3 py-2 md:py-4 '>정산하기</div>
            <Accordion title='[정산] 판매금은 언제 받을 수 있나요?'>
              구매가 이루어졌을 경우 구매자에게 물건이 배송된 이후 구매자가
              인수확인을 하였을 경우 영업일 기준 +1일 이후 입금됩니다. 단,
              구매자가 인수확인을 직접 누르지 않을경우 +7일 이후 자동으로
              입금됩니다.
            </Accordion>
            <Accordion title='[정산] 이용 수수료는 얼마인가요?'>
              큐 판매 완료시 큐찾사 내큐판매 이용 수수료는 판매금의 8% 입니다.
              수수료 제외후 고객님의 계좌로 입금됩니다. 큐가 판매되지 않았을
              경우에는 수수료가 없습니다.
            </Accordion>
            <Accordion title='[정산] 다른 통장으로 판매금을 받을 수 있나요?'>
              큐찾사 시스템에서 사기 및 고객님의 계좌 오입력 방지를 위해 본인
              명의의 계좌인지를 확인합니다. 고객님 명의의 통장인 경우 언제든지
              변경이 가능하나 다른 사람의 명의인 경우에는 불가합니다.
            </Accordion>
            <Accordion title='[정산] 큐찾사는 왜 안전한가요?'>
              1. 판매되는 모든 상품은 김치빌리아드 교대점 매장에서 직접
              관리합니다. 24시간 온도/습도가 유지됩니다.
              <br />
              <br />
              2. 실명인증된 회원만 서비스 이용이 가능합니다. (NICE신용평가)
              <br />
              <br />
              3. PG결제 시스템을 도입하여 거래대금은 안전히 PG사를 통해
              처리됩니다. (이노페이)
              <br />
              <br />
              4. 등록되는 계좌는 전부 실 소유 계좌인지 확인합니다.
              <br />
              <br />
              5. 판매대금 정산은 시스템이 자동으로 처리하기 때문에 사람의 실수를
              방지합니다.
              <br />
            </Accordion>
            <span
              className='block border-t border-gray-200'
              aria-hidden='true'
            ></span>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
