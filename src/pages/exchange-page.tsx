import { useState, Fragment } from 'react';
import Card from '../components/card';
import Wrapper from '../components/wrapper';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Listbox, Transition } from '@headlessui/react';

const people = [
  {
    id: 1,
    name: '국민 은행',
  },
  {
    id: 2,
    name: '부산 은행',
  },
  {
    id: 3,
    name: '신한 은행',
  },
];
function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}

const ExchangePage = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selected, setSelected] = useState(people[0]);

  const options = [
    {
      value: '5000원',
      label: '5000원',
      description: '500 코인',
    },
    {
      value: '10000원',
      label: '10000원',
      description: '1000 코인',
    },
    {
      value: '20000원',
      label: '20000원',
      description: '2000 코인',
    },
    // Add more options as needed
  ];

  return (
    <Wrapper>
      <div className="flex justify-around w-full h-screen py-24 mt-[-24px]">
        <Card classname="w-[40%]">
          <h2 className="text-xl font-semibold mb-4 text-center">충전</h2>
          <p className="text-sm text-gray-600 mb-6">충전할 금액</p>
          <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
            <div className="flex-col">
              {options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={() => setSelectedValue(option.value)}
                    className="hidden"
                  />
                  <div
                    className={`flex items-center justify-center w-4 h-4 border rounded-full mr-2 ${
                      selectedValue === option.value
                        ? 'border-blue-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedValue === option.value && (
                      <div className="w-2 h-2 rounded-full mx-auto bg-blue-500" />
                    )}
                  </div>
                  <div className="flex gap-2">
                    <p className="text-base font-medium text-gray-700">
                      {option.label}
                    </p>
                    <ArrowSmallRightIcon className="h-6 w-6 text-gray-600" />
                    <p className="text-base font-medium text-gray-700">
                      {option.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="flex-col w-full p-8">
            <button className="block w-full mb-4 rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
              네이버 페이
            </button>
            <button className="block w-full mb-4 rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
              카카오 페이
            </button>
            <button className="block w-full mb-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              카드 결제
            </button>
          </div>
        </Card>
        <Card classname="w-[40%]">
          <h2 className="text-xl font-semibold text-center mb-8">출금</h2>
          <label htmlFor="exchange" className="text-gray-600 cursor-pointer">
            출금할 금액 입력
          </label>
          <input
            type="number"
            min={0}
            id="exchange"
            autoComplete="organization"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="w-full flex mt-2 justify-end gap-2 text-xs font-medium text-gray-500">
            <span>출금 가능한 금액: </span>
            <span>0</span>
          </div>
          <Card>
            <div>
              <h2 className="text-gray-600 text-center">계좌 입력</h2>
            </div>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                    은행 선택
                  </Listbox.Label>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">
                          {selected.name}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? 'bg-indigo-600 text-white'
                                  : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'ml-3 block truncate'
                                    )}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            <input
              type="text"
              id="exchange"
              placeholder="계좌번호"
              autoComplete="organization"
              className="block mt-2 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button className="block mt-2 w-full mb-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              확인
            </button>
          </Card>
        </Card>
      </div>
    </Wrapper>
  );
};

export default ExchangePage;
