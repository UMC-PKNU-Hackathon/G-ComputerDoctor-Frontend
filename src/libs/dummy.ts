// Make sure to replace with the correct path

import { ProblemType } from '../types/problem';

const dummyProblems: ProblemType[] = [
  {
    id: 1,
    category: 'Programming',
    reward: 100,
    deadline: new Date('2023-12-01'),
    body: 'Write a program to solve a specific problem.',
    createdAt: '2023-11-20T10:30:00',
    updatedAt: '2023-11-20T12:45:00',
    image:
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg',
  },
  {
    id: 2,
    category: 'Mathematics',
    reward: 75,
    deadline: new Date('2023-12-10'),
    body: 'Solve a set of mathematical problems.',
    createdAt: '2023-11-22T14:20:00',
    updatedAt: '2023-11-22T15:45:00',
    image:
      'https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg',
  },
  {
    id: 3,
    category: 'Design',
    reward: 150,
    deadline: new Date('2023-12-05'),
    body: 'Create a user interface for a given application.',
    createdAt: '2023-11-25T09:45:00',
    updatedAt: '2023-11-25T11:30:00',
    image: 'https://i.ytimg.com/vi/NpTSHIXA2Og/maxresdefault.jpg',
  },
  {
    id: 4,
    category: 'Writing',
    reward: 50,
    deadline: new Date('2023-12-15'),
    body: 'Compose a short story or article on a given topic.',
    createdAt: '2023-11-28T16:00:00',
    updatedAt: '2023-11-28T18:20:00',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhznXMUfEFnoHcgqZBq7QYOea6xN3i2KTTyA&usqp=CAU',
  },
  {
    id: 5,
    category: 'Data Analysis',
    reward: 120,
    deadline: new Date('2023-12-08'),
    body: 'Analyze a dataset and provide insights.',
    createdAt: '2023-11-30T12:10:00',
    updatedAt: '2023-11-30T14:30:00',
    image: 'https://i.ytimg.com/vi/gjVX47dLlN8/hqdefault.jpg',
  },
  {
    id: 6,
    category: 'Marketing',
    reward: 90,
    deadline: new Date('2023-12-03'),
    body: 'Create a marketing strategy for a new product.',
    createdAt: '2023-12-01T08:45:00',
    updatedAt: '2023-12-01T10:15:00',
    image:
      'https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/1LEJIT9KGRC4nwTJ5vuS6H/a912e31c468fd32986f2818816135cc4/OnlineLearning_SouthAsia_Learning_Indoor_GettyImages-1071652068.jpg?fit=thumb',
  },
  {
    id: 7,
    category: 'Physics',
    reward: 80,
    deadline: new Date('2023-12-12'),
    body: 'Solve physics problems related to classical mechanics.',
    createdAt: '2023-12-02T13:20:00',
    updatedAt: '2023-12-02T15:40:00',
    image:
      'https://cdn.educba.com/academy/wp-content/uploads/2023/08/Components-of-Computers-Image.jpg',
  },
];

export default dummyProblems;
