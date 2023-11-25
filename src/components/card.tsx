import { cn } from '../libs/utils';

interface CardProps {
  children: React.ReactNode;
  classname?: string;
}

const Card = ({ children, classname }: CardProps) => {
  return (
    <div className={cn('bg-white p-6 rounded-lg shadow-md', classname)}>
      {children}
    </div>
  );
};

export default Card;
