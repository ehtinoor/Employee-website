import React from 'react';
import EmailInput from './Email Input';
import PasswordInput from './PasswordInput';
import UsernameInput from './UsernameInput';
import ResetButton from './ResetButton';
import SubmitButton from './SubmitButton';

const App = () => {
  return (
    <form className="border flex-col">
      <UsernameInput  />
      <EmailInput />
      <PasswordInput />
      <div>
        <ResetButton />
        <SubmitButton />
      </div>
    </form>
  );
};

export default App;
