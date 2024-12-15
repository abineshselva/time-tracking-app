import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const SignInPage = () => {
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      // Add your credentials here
    });

    if (result.ok) {
      router.push('/'); // Redirect to the home page after successful sign-in
    }
  };

  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Add your sign-in form here */}
          <form onSubmit={handleSignIn}>
            {/* Your form fields */}
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
};

export default SignInPage;
