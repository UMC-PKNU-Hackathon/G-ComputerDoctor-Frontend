import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  PencilSquareIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const products = [
  {
    name: '프로필 편집',
    description: '프로필을 편집해 보세요',
    href: '#',
    icon: PencilSquareIcon,
  },
  {
    name: '의뢰 알림',
    description: '알림을 받아보세요',
    href: '#',
    icon: BellAlertIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-gray-100 to-gray-50 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center lg:flex-1">
          <Link to={'/'} className="-m-1.5 p-1.5 flex items-center">
            <svg
              width="100"
              height="50"
              viewBox="0 0 196 95"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66797 34C5.56641 34 3.51562 31.9492 3.51562 27.8477V13.6094C3.51562 9.50781 5.56641 7.45703 9.66797 7.45703H15.1172C19.2188 7.45703 21.2695 9.50781 21.2695 13.6094V15.543L17.9297 17.125H17.7539V13.6094C17.7539 11.6172 16.875 10.6211 15.1172 10.6211H9.66797C7.91016 10.6211 7.03125 11.6172 7.03125 13.6094V27.8477C7.03125 29.8398 7.91016 30.8359 9.66797 30.8359H15.1172C16.875 30.8359 17.7539 29.8398 17.7539 27.8477V25.9141L21.0938 24.332H21.2695V27.8477C21.2695 31.9492 19.2188 34 15.1172 34H9.66797ZM32.6953 30.8359H36.7383C37.9102 30.8359 38.4961 30.1328 38.4961 28.7266V19.9375C38.4961 18.5312 37.9102 17.8281 36.7383 17.8281H32.6953C31.5234 17.8281 30.9375 18.5312 30.9375 19.9375V28.7266C30.9375 30.1328 31.5234 30.8359 32.6953 30.8359ZM32.6953 34C29.1797 34 27.4219 32.2422 27.4219 28.7266V19.9375C27.4219 16.4219 29.1797 14.6641 32.6953 14.6641H36.7383C40.2539 14.6641 42.0117 16.4219 42.0117 19.9375V28.7266C42.0117 32.2422 40.2539 34 36.7383 34H32.6953ZM47.2852 34.7031V19.9375C47.2852 16.4219 49.043 14.6641 52.5586 14.6641H56.6016C58.2188 14.6641 59.3906 15.0977 60.1172 15.9648C60.8906 15.0977 62.0625 14.6641 63.6328 14.6641H67.6758C71.1914 14.6641 72.9492 16.4219 72.9492 19.9375V33.1211L69.6094 34.7031H69.4336V19.9375C69.4336 18.5312 68.8477 17.8281 67.6758 17.8281H63.6328C62.4609 17.8281 61.875 18.5312 61.875 19.9375V33.1211L58.5352 34.7031H58.3594V19.9375C58.3594 18.5312 57.7734 17.8281 56.6016 17.8281H52.5586C51.3867 17.8281 50.8008 18.5312 50.8008 19.9375V33.1211L47.4609 34.7031H47.2852ZM84.375 34C83.5781 34 82.9922 33.8184 82.6172 33.4551V40.3281L79.2773 41.9102H79.1016V19.9375C79.1016 16.4219 80.8594 14.6641 84.375 14.6641H88.418C91.9336 14.6641 93.6914 16.4219 93.6914 19.9375V28.7266C93.6914 32.2422 91.9336 34 88.418 34H84.375ZM84.375 30.8359H88.418C89.5898 30.8359 90.1758 30.1328 90.1758 28.7266V19.9375C90.1758 18.5312 89.5898 17.8281 88.418 17.8281H84.375C83.2031 17.8281 82.6172 18.5312 82.6172 19.9375V28.7266C82.6172 30.1328 83.2031 30.8359 84.375 30.8359ZM104.238 34C100.723 34 98.9648 32.2422 98.9648 28.7266V15.543L102.305 13.9609H102.48V28.7266C102.48 30.1328 103.066 30.8359 104.238 30.8359H108.281C109.453 30.8359 110.039 30.1328 110.039 28.7266V15.543L113.379 13.9609H113.555V28.7266C113.555 32.2422 111.797 34 108.281 34H104.238ZM121.148 34.7031V17.8633H116.631V17.6875L118.055 14.6641H121.148V8.33594L124.488 6.75391H124.664V14.6641H129.182V14.8398L127.758 17.8633H124.664V33.1211L121.324 34.7031H121.148ZM137.531 34C134.016 34 132.258 32.2422 132.258 28.7266V19.9375C132.258 16.4219 134.016 14.6641 137.531 14.6641H141.574C145.09 14.6641 146.848 16.4219 146.848 19.9375V20.8691L135.826 29.3945C135.99 30.3555 136.559 30.8359 137.531 30.8359H141.574C142.746 30.8359 143.332 30.1328 143.332 28.7266V27.7949L146.672 26.2129H146.848V28.7266C146.848 32.2422 145.09 34 141.574 34H137.531ZM135.773 25.7207L143.314 19.6387C143.244 18.4316 142.664 17.8281 141.574 17.8281H137.531C136.359 17.8281 135.773 18.5312 135.773 19.9375V25.7207ZM152.121 34.7031V19.9375C152.121 16.4219 153.879 14.6641 157.395 14.6641H161.789V14.8398L160.383 17.8281H157.395C156.223 17.8281 155.637 18.5312 155.637 19.9375V33.1211L152.297 34.7031H152.121Z"
                fill="black"
              />
              <path
                d="M92.0312 82.8359H99.7656C101.523 82.8359 102.402 81.8398 102.402 79.8477V65.6094C102.402 63.6172 101.523 62.6211 99.7656 62.6211H92.0312V82.8359ZM88.5156 86V60.3359L90.3789 59.457H99.7656C103.867 59.457 105.918 61.5078 105.918 65.6094V79.8477C105.918 83.9492 103.867 86 99.7656 86H88.5156ZM117.344 82.8359H121.387C122.559 82.8359 123.145 82.1328 123.145 80.7266V71.9375C123.145 70.5312 122.559 69.8281 121.387 69.8281H117.344C116.172 69.8281 115.586 70.5312 115.586 71.9375V80.7266C115.586 82.1328 116.172 82.8359 117.344 82.8359ZM117.344 86C113.828 86 112.07 84.2422 112.07 80.7266V71.9375C112.07 68.4219 113.828 66.6641 117.344 66.6641H121.387C124.902 66.6641 126.66 68.4219 126.66 71.9375V80.7266C126.66 84.2422 124.902 86 121.387 86H117.344ZM137.207 86C133.691 86 131.934 84.2422 131.934 80.7266V71.9375C131.934 68.4219 133.691 66.6641 137.207 66.6641H141.25C144.766 66.6641 146.523 68.4219 146.523 71.9375V72.8691L143.184 74.4512H143.008V71.9375C143.008 70.5312 142.422 69.8281 141.25 69.8281H137.207C136.035 69.8281 135.449 70.5312 135.449 71.9375V80.7266C135.449 82.1328 136.035 82.8359 137.207 82.8359H141.25C142.422 82.8359 143.008 82.1328 143.008 80.7266V79.7949L146.348 78.2129H146.523V80.7266C146.523 84.2422 144.766 86 141.25 86H137.207ZM154.117 86.7031V69.8633H149.6V69.6875L151.023 66.6641H154.117V60.3359L157.457 58.7539H157.633V66.6641H162.15V66.8398L160.727 69.8633H157.633V85.1211L154.293 86.7031H154.117ZM170.5 82.8359H174.543C175.715 82.8359 176.301 82.1328 176.301 80.7266V71.9375C176.301 70.5312 175.715 69.8281 174.543 69.8281H170.5C169.328 69.8281 168.742 70.5312 168.742 71.9375V80.7266C168.742 82.1328 169.328 82.8359 170.5 82.8359ZM170.5 86C166.984 86 165.227 84.2422 165.227 80.7266V71.9375C165.227 68.4219 166.984 66.6641 170.5 66.6641H174.543C178.059 66.6641 179.816 68.4219 179.816 71.9375V80.7266C179.816 84.2422 178.059 86 174.543 86H170.5ZM185.09 86.7031V71.9375C185.09 68.4219 186.848 66.6641 190.363 66.6641H194.758V66.8398L193.352 69.8281H190.363C189.191 69.8281 188.605 70.5312 188.605 71.9375V85.1211L185.266 86.7031H185.09Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/experts"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            상위 전문가
          </Link>
          <Link
            to="/posts"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            의뢰 보기
          </Link>
          <Link
            to="/posts/create"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            의뢰
          </Link>
          <Link
            to="/reviews"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            리뷰 보기
          </Link>
          <Link
            to="/exchange"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            환전하기
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              더보기
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/signin"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            로그인 <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
