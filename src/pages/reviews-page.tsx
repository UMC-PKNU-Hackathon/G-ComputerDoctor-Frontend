import Wrapper from '../components/wrapper';

const badges: {
  [key: string]: {
    name: string;
    style: string;
  };
} = {
  a: {
    name: '빠르게 알려줌',
    style:
      'inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10',
  },
  b: {
    name: '친절함',
    style:
      'inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10',
  },
  c: {
    name: '정확함',
    style:
      'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
  },
  d: {
    name: '유익함',
    style:
      'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20',
  },
  e: {
    name: '이해하기 쉽게 알려줌',
    style:
      'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
  },
};

const categoryBadge: {
  [key: string]: {
    name: string;
    style: string;
  };
} = {
  a: {
    name: '안드로이드',
    style:
      'inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10',
  },
  b: {
    name: '스프링',
    style:
      'inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10',
  },
  c: {
    name: '리액트',
    style:
      'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
  },
  d: {
    name: '장고',
    style:
      'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20',
  },
  e: {
    name: '인공지능',
    style:
      'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
  },
};

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    reviewScore: 4.5,
    badgeType: 'a',
    categoryBadgeType: 'e',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    reviewScore: 4.0,
    badgeType: 'b',
    categoryBadgeType: 'd',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
    reviewScore: 3.0,
    badgeType: 'c',
    categoryBadgeType: 'a',
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    reviewScore: 4.1,
    badgeType: 'd',
    categoryBadgeType: 'c',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    reviewScore: 4.2,
    badgeType: 'e',
    categoryBadgeType: 'b',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
    reviewScore: 4.3,
    badgeType: 'a',
    categoryBadgeType: 'e',
  },
];

const ReviewsPage = () => {
  return (
    <Wrapper>
      <div className="bg-gray-100 px-72 py-12">
        <ul role="list" className="divide-y divide-gray-300">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex justify-between items-center py-4"
            >
              <div className="flex min-w-0 gap-x-4 items-center">
                <img
                  className="h-16 w-16 flex-none rounded-full bg-gray-300"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                    {person.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                {person.lastSeen ? (
                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    Last seen{' '}
                    <time dateTime={person.lastSeenDateTime}>
                      {person.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-emerald-500 font-semibold">
                      Online
                    </p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-x-2">
                {Rating(Math.floor(person.reviewScore))}
              </div>
              <div className="flex items-center gap-x-2">
                <div>
                  <span
                    className={categoryBadge[person.categoryBadgeType].style}
                  >
                    {categoryBadge[person.categoryBadgeType].name}
                  </span>
                </div>
                <div>
                  <span className={badges[person.badgeType].style}>
                    {badges[person.badgeType].name}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const Rating = (n: number) => {
  return (
    <div className="flex items-center">
      {[...Array(n)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
    </div>
  );
};

export default ReviewsPage;
