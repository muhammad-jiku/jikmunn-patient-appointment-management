import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { getPatient } from '@/lib/actions/patients.actions';
import Image from 'next/image';

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const year = new Date().getFullYear();
  const patient = await getPatient(userId);

  return (
    <div className='flex h-screen max-h-screen'>
      {/* <section className='remove-scrollbar container my-auto'> */}
      <section className=' container my-auto'>
        <div className='sub-container max-w-[860px] flex-1 justify-between'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            alt='logo'
            className='mb-12 h-10 w-fit'
          />

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type='create'
          />

          <p className='copyright mt-10 py-12'>
            © {year} CarePluses. All rights reserverd.
          </p>
        </div>
      </section>

      <Image
        src='/assets/images/appointment-img.png'
        height={1500}
        width={1500}
        alt='appointment'
        className='side-img max-w-[390px] bg-bottom'
      />
    </div>
  );
};

export default Appointment;
