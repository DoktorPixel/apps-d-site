'use client';

import React, { useState, useEffect } from 'react';
import { BookIcon, CloseIcon, LogoIcon } from 'public/img/icons';

import '@/app/components/popup/popup.css';
import { FormControl, InputLabel } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import * as EmailValidator from 'email-validator';
import useHttp from '@/app/helps/use-http';
import OverviewForge from 'public/files/OverviewForge.pdf';

const CustomizedInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: '#FFF',
    borderRadius: '20px',
    fontSize: 16,
    width: '350px',
    maxWidth: '75vw',
    padding: '10px 12px',
    color: '#FFF',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  '&.Mui-error .MuiInputBase-input': {
    color: '#D32F2F',
    borderColor: '#D32F2F',
  },
}));
export default function Whitepaper() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isDownloadDisabled, setIsDownloadDisabled] = useState(true);
  const { onSubmit } = useHttp();
  useEffect(() => {
    setTimeout(() => {
      setIsPopupOpen(true);
    }, 14000);
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'email') {
      const isValid = EmailValidator.validate(value);
      setEmailError(
        isValid || value.length === 0 ? '' : 'Invalid email address'
      );
    }
    setUser({
      ...user,
      [name]: value,
    });
  };
  useEffect(() => {
    setIsDownloadDisabled(
      user.email.length === 0 ||
        emailError.length > 0 ||
        user.firstName.length === 0 ||
        user.lastName.length === 0
    );
  }, [user, emailError]);
  const onSubmitHandler = async () => {
    if (user.email && user.firstName && user.lastName && !emailError) {
      setIsDownloadDisabled(true);
      const contactData = {
        lead_id: 'lead_Fq4iTJslWAalk80KR8CapJulteLWyG5YnpofSFqEuOE',
        name: user.firstName + ' ' + user.lastName,
        emails: [{ email: user.email }],
        phone: [{ phone: user?.phone }],
      };
      const res = await onSubmit(contactData, 'contact');
      if (res) {
        const link = document.createElement('a');
        link.download = 'A Comprehensive Overview of Atlassian Forge';
        link.href = OverviewForge;
        link.click();
        setIsPopupOpen(false);
      }
    } else {
      console.error('Sorry, something went wrong. Please try again later.');
    }
  };
  return isPopupOpen ? (
    <>
      {isFormOpen ? (
        <div className='popup'>
          <div className='popup_header'>
            <p>A Comprehensive Guide to Atlassian Forge</p>
            <button
              className='close'
              onClick={() => {
                setIsPopupOpen(false);
                setIsFormOpen(false);
              }}
            >
              <CloseIcon />
            </button>
          </div>
          <p className='description'>
            Fill out the form to download the E-Book!
          </p>
          <div id='sentForm'>
            <div>
              <FormControl
                variant='standard'
                style={{ display: 'flex', gap: '24px', height: '100px' }}
              >
                <InputLabel
                  required
                  shrink
                  htmlFor='fullName'
                  style={{
                    color: '#FFF',
                    fontSize: '24px',
                    fontWeight: '700',
                    padding: '10px 0',
                  }}
                >
                  First Name
                </InputLabel>
                <CustomizedInput
                  placeholder='First Name'
                  id='firstName'
                  name='firstName'
                  defaultValue={user?.firstName}
                  value={user?.firstName}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </div>
            <div>
              <FormControl
                variant='standard'
                style={{ display: 'flex', gap: '24px', height: '100px' }}
              >
                <InputLabel
                  required
                  shrink
                  htmlFor='lastName'
                  style={{
                    color: '#FFF',
                    fontSize: '24px',
                    fontWeight: '700',
                    padding: '10px 0',
                  }}
                >
                  Last Name
                </InputLabel>
                <CustomizedInput
                  placeholder='Last Name'
                  id='lastName'
                  name='lastName'
                  defaultValue={user?.lastName}
                  value={user?.lastName}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </div>
            <div>
              <FormControl
                variant='standard'
                style={{ display: 'flex', gap: '24px', height: '100px' }}
              >
                <InputLabel
                  required
                  shrink
                  htmlFor='email'
                  style={{
                    color: '#FFF',
                    fontSize: '24px',
                    fontWeight: '700',
                    padding: '10px 0',
                  }}
                >
                  Email
                </InputLabel>
                <CustomizedInput
                  placeholder='Email'
                  id='email'
                  name='email'
                  defaultValue={user?.email}
                  value={user?.email}
                  onChange={handleChange}
                  error={Boolean(emailError)}
                  errorMessage={emailError}
                  required
                />
              </FormControl>
            </div>
            <div>
              <FormControl variant='standard' style={{ height: '100px' }}>
                <InputLabel
                  shrink
                  htmlFor='phoneNumber'
                  style={{
                    color: '#FFF',
                    fontSize: '24px',
                    fontWeight: '700',
                    padding: '10px 0',
                  }}
                >
                  Phone number
                </InputLabel>
                <CustomizedInput
                  placeholder='Phone number'
                  id='phone'
                  name='phone'
                  defaultValue={user?.phone}
                  value={user?.phone}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <button
              type='button'
              className='download'
              disabled={isDownloadDisabled}
              onClick={onSubmitHandler}
            >
              Download
            </button>
          </div>
        </div>
      ) : (
        <div className='popup'>
          <div className='popup_header'>
            <LogoIcon />
            <p>A Comprehensive Guide to Atlassian Forge</p>
            <button className='close' onClick={() => setIsPopupOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div>
            This whitepaper is your guide to realizing the full potential of
            your Atlassian tools. Learn how Atlassian Forge, their integrated
            server-less development platform, can revolutionize your workflows
            with scalability, security and unlimited customization.
          </div>
          <div>
            <button
              type='button'
              className='download'
              onClick={() => setIsFormOpen(true)}
            >
              Download the Whitepaper
            </button>
          </div>
        </div>
      )}
    </>
  ) : (
    <div className='bookIcon' onClick={() => setIsPopupOpen(true)}>
      <BookIcon />
    </div>
  );
}
