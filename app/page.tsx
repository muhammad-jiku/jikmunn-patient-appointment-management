import { PatientForm } from '@/components/forms/PatientForm';
import { PasskeyModal } from '@/components/shared/PasskeyModal';
import Image from 'next/image';
import Link from 'next/link';

const Home = async (props: SearchParamProps) => {
  const searchParams = await props.searchParams; // await before destructuring properties
  const isAdmin = searchParams?.admin === 'true';
  const year = new Date().getFullYear();

  return (
    <div className='flex h-screen max-h-screen'>
      {isAdmin && <PasskeyModal />}
      <section className='custom-scrollbar container'>
        <div className='sub-container max-w-[496px] flex-1 flex-col py-10'>
          <Image
            src='/assets/icons/logo-icon.svg'
            height={1000}
            width={1000}
            alt='patient'
            className='mb-12 h-10 w-fit'
          />

          <PatientForm />

          <div className='text-14-regular my-20 py-4 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © {year} Meet the Doc. All rights reserved.
            </p>
            <Link href='/?admin=true' className='text-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src='/assets/images/onboarding-img.png'
        height={1000}
        width={1000}
        alt='patient'
        className='side-img max-w-[50%]'
      />
    </div>
  );
};

export default Home;
