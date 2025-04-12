import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { getPatient } from '@/lib/actions/patients.actions';
import Image from 'next/image';

const Appointment = async (props: SearchParamProps) => {
  const params = await props.params;
  const userId = params.userId;
  const patient = await getPatient(userId);
  const year = new Date().getFullYear();

  return (
    <div className='flex h-screen max-h-screen'>
      <section className='custom-scrollbar container'>
        <div className='sub-container max-w-[860px] flex-1 flex-col py-10'>
          <Image
            src='/assets/icons/logo-icon.svg'
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

          <p className='copyright py-12'>
            © {year} Meet the Doc. All rights reserved.
          </p>
        </div>
      </section>

      <Image
        src='/assets/images/appointment-img.png'
        height={1500}
        width={1500}
        alt='appointment'
        className='side-img max-w-[390px]'
      />
    </div>
  );
};

export default Appointment;
