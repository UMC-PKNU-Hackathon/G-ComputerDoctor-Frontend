import Wrapper from '../components/wrapper';

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkYXRhJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    name: 'Dries Vincent',
    role: 'Manager, Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkYXRhJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkYXRhJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkYXRhJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    name: 'Dries Vincent',
    role: 'Manager, Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkYXRhJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkYXRhJTIwY29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
];

const ExpertsPage = () => {
  return (
    <Wrapper>
      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              전문가를 만나보세요
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              컴퓨터닥터는 전문가와 의뢰자를 연결해줌으로써 원격 화면공유를 통해
              문제를 해결하는 플랫폼 서비스입니다.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExpertsPage;
