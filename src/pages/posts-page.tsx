import React from 'react';
import { ProblemType } from '../types/problem';
import dummyProblems from '../libs/dummy';
import { formattedDate } from '../libs/formattedDate';
import { Link } from 'react-router-dom';
import Wrapper from '../components/wrapper';

interface ProblemCardProps {
  problem: ProblemType;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
  return (
    <Link to={`/posts/${problem.id}/chat`}>
      <div className="bg-white rounded-lg shadow-md p-6 m-4">
        <img
          src={problem.image}
          alt={`Problem: ${problem.category}`}
          className="w-full h-60 object-cover mb-4 rounded-md"
        />
        <h2 className="text-xl font-semibold">{problem.category}</h2>
        <p className="text-gray-500">
          Deadline: {formattedDate(problem.createdAt)}~
          {formattedDate(problem.deadline)}
        </p>
        <p className="mt-4">{problem.body}</p>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-700">Reward: {problem.reward}</p>
        </div>
      </div>
    </Link>
  );
};

interface ProblemListProps {
  problems: ProblemType[];
}

const ProblemList: React.FC<ProblemListProps> = ({ problems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-16">
      {problems.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
    </div>
  );
};

const PostCreatePage: React.FC = () => {
  return (
    <Wrapper>
      <div className="min-h-screen bg-gray-100">
        <div className="flex justify-end px-16 pt-4 mx-4">
          <Link
            to="/posts/create"
            className="bg-slate-700 text-white py-2 px-4 rounded-md"
          >
            + 새 의뢰 등록
          </Link>
        </div>
        <ProblemList problems={dummyProblems} />
      </div>
    </Wrapper>
  );
};

export default PostCreatePage;
