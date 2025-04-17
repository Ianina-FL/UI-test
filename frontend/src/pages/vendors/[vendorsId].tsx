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

import { update, fetch } from '../../stores/vendors/vendorsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditVendors = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    contact_info: '',

    service_type: '',

    rating: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { vendors } = useAppSelector((state) => state.vendors);

  const { vendorsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: vendorsId }));
  }, [vendorsId]);

  useEffect(() => {
    if (typeof vendors === 'object') {
      setInitialValues(vendors);
    }
  }, [vendors]);

  useEffect(() => {
    if (typeof vendors === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach((el) => (newInitialVal[el] = vendors[el]));

      setInitialValues(newInitialVal);
    }
  }, [vendors]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: vendorsId, data }));
    await router.push('/vendors/vendors-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit vendors')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit vendors'}
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

              <FormField label='ContactInfo'>
                <Field name='contact_info' placeholder='ContactInfo' />
              </FormField>

              <FormField label='ServiceType' labelFor='service_type'>
                <Field name='service_type' id='service_type' component='select'>
                  <option value='catering'>catering</option>

                  <option value='decorating'>decorating</option>

                  <option value='entertainment'>entertainment</option>
                </Field>
              </FormField>

              <FormField label='Rating'>
                <Field type='number' name='rating' placeholder='Rating' />
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
                  onClick={() => router.push('/vendors/vendors-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditVendors.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_VENDORS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditVendors;
