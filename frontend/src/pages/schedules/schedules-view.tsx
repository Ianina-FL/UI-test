import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/schedules/schedulesSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

const SchedulesView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { schedules } = useAppSelector((state) => state.schedules);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View schedules')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View schedules')}
          main
        >
          <BaseButton
            color='info'
            label='Edit'
            href={`/schedules/schedules-edit/?id=${id}`}
          />
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Title</p>
            <p>{schedules?.title}</p>
          </div>

          <FormField label='StartTime'>
            {schedules.start_time ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  schedules.start_time
                    ? new Date(
                        dayjs(schedules.start_time).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No StartTime</p>
            )}
          </FormField>

          <FormField label='EndTime'>
            {schedules.end_time ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  schedules.end_time
                    ? new Date(
                        dayjs(schedules.end_time).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No EndTime</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Venue</p>

            <p>{schedules?.venue?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Vendors</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>ContactInfo</th>

                      <th>ServiceType</th>

                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.vendors &&
                      Array.isArray(schedules.vendors) &&
                      schedules.vendors.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/vendors/vendors-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='contact_info'>{item.contact_info}</td>

                          <td data-label='service_type'>{item.service_type}</td>

                          <td data-label='rating'>{item.rating}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!schedules?.vendors?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Budgets Event</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.budgets_event &&
                      Array.isArray(schedules.budgets_event) &&
                      schedules.budgets_event.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/budgets/budgets-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='amount'>{item.amount}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!schedules?.budgets_event?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/schedules/schedules-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

SchedulesView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_SCHEDULES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default SchedulesView;
