import RegisterForm from '@/components/forms/RegisterForm';
import { getPatient, getUser } from '@/lib/actions/patients.actions';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const Register = async (props: SearchParamProps) => {
  const params = await props.params;
  const userId = params.userId;
  const user = await getUser(userId);
  const patient = await getPatient(userId);
  const year = new Date().getFullYear();

  if (patient) {
    redirect(`/patients/${userId}/new-appointment`);
  }

  return (
    <div className='flex h-screen max-h-screen'>
      <section className='custom-scrollbar container'>
        <div className='sub-container max-w-[860px] flex-1 flex-col py-10'>
          <Image
            src='/assets/icons/logo-icon.svg'
            height={1000}
            width={1000}
            alt='patient'
            className='mb-12 h-10 w-fit'
          />

          <RegisterForm user={user} />

          <p className='copyright py-12'>
            © {year} Meet the Doc. All rights reserved.
          </p>
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
