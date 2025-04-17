import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/guests/guestsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditGuests = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    email: '',

    is_attending: false,

    meal_preference: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { guests } = useAppSelector((state) => state.guests);

  const { guestsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: guestsId }));
  }, [guestsId]);

  useEffect(() => {
    if (typeof guests === 'object') {
      setInitialValues(guests);
    }
  }, [guests]);

  useEffect(() => {
    if (typeof guests === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach((el) => (newInitialVal[el] = guests[el]));

      setInitialValues(newInitialVal);
    }
  }, [guests]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: guestsId, data }));
    await router.push('/guests/guests-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit guests')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit guests'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Name'>
                <Field name='name' placeholder='Name' />
              </FormField>

              <FormField label='Email'>
                <Field name='email' placeholder='Email' />
              </FormField>

              <FormField label='IsAttending' labelFor='is_attending'>
                <Field
                  name='is_attending'
                  id='is_attending'
                  component={SwitchField}
                ></Field>
              </FormField>

              <FormField label='MealPreference' labelFor='meal_preference'>
                <Field
                  name='meal_preference'
                  id='meal_preference'
                  component='select'
                >
                  <option value='standard'>standard</option>

                  <option value='vegetarian'>vegetarian</option>
                </Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/guests/guests-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditGuests.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_GUESTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditGuests;
