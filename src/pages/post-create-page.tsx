import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Wrapper from '../components/wrapper';

const formSchema = z.object({
  title: z.string().min(2, {
    message: '제목은 2글자 이상 적어주세요',
  }),
  content: z.string().min(10, {
    message: '내용은 10글자 이상 적어주세요',
  }),
  amount: z.number(),
});

export default function PostCreatePage() {
  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = async () => {};

  const isLoading = formState.isSubmitting;

  return (
    <Wrapper>
      <div className="isolate bg-white px-6 py-16 z-0">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] "
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            의뢰하기
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            전문가에게 의뢰해보세요
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                제목
              </label>

              <div className="mt-2.5">
                <input
                  type="text"
                  id="title"
                  {...register('title')}
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {formState.errors.title && (
                <div className="mt-2 text-red-500">
                  {formState.errors.title.message}
                </div>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                내용
              </label>

              <div className="mt-2.5">
                <textarea
                  {...register('content')}
                  id="content"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {formState.errors.content && (
                <div className="mt-2 text-red-500">
                  {formState.errors.content.message}
                </div>
              )}
              <div className="mt-2.5 flex gap-2 ">
                <label
                  htmlFor="amount"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  의뢰비
                </label>
                <input
                  type="number"
                  id="amount"
                  min={0}
                  {...register('amount')}
                  className="w-[50px] border rounded-sm"
                />
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  코인
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              disabled={isLoading}
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              의뢰하기
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
