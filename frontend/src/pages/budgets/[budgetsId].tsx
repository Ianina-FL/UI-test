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

import { update, fetch } from '../../stores/budgets/budgetsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditBudgets = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    amount: '',

    event: null,
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { budgets } = useAppSelector((state) => state.budgets);

  const { budgetsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: budgetsId }));
  }, [budgetsId]);

  useEffect(() => {
    if (typeof budgets === 'object') {
      setInitialValues(budgets);
    }
  }, [budgets]);

  useEffect(() => {
    if (typeof budgets === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach((el) => (newInitialVal[el] = budgets[el]));

      setInitialValues(newInitialVal);
    }
  }, [budgets]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: budgetsId, data }));
    await router.push('/budgets/budgets-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit budgets')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit budgets'}
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

              <FormField label='Amount'>
                <Field type='number' name='amount' placeholder='Amount' />
              </FormField>

              <FormField label='Event' labelFor='event'>
                <Field
                  name='event'
                  id='event'
                  component={SelectField}
                  options={initialValues.event}
                  itemRef={'schedules'}
                  showField={'title'}
                ></Field>
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
                  onClick={() => router.push('/budgets/budgets-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditBudgets.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_BUDGETS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditBudgets;
