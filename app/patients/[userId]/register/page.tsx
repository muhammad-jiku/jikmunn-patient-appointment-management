import RegisterForm from '@/components/forms/RegisterForm';
import { getPatient, getUser } from '@/lib/actions/patients.actions';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const year = new Date().getFullYear();
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className='flex h-screen max-h-screen'>
      {/* <section className='remove-scrollbar container'> */}
      <section className=' container'>
        <div className='sub-container max-w-[860px] flex-1 flex-col py-10'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            alt='patient'
            className='mb-12 h-10 w-fit'
          />

          <RegisterForm user={user} />

          <p className='copyright py-12'>© {year} CarePluse</p>
        </div>
      </section>

      <Image
        src='/assets/images/register-img.png'
        height={1000}
        width={1000}
        alt='patient'
        className='side-img max-w-[390px]'
      />
    </div>
  );
};

export default Register;
