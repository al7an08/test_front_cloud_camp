import MainPage from "./components/pages/mainPage";
import Step1 from "./components/pages/step1";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useState } from 'react'



const useInput = (initialValue: string) => { //Самописный хук inputов
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
  }


  return { value, onChange, onBlur }
}

const App = () => {

  const telephoneNumber = useInput('')
  const email = useInput('')
  const name = useInput('')
  const sex = useInput('')
  const nickname = useInput('')
  const sername = useInput('')

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<Navigate to="/main" />} />
          <Route path={'/main'}
            element={
              <MainPage
                telephoneNumber={telephoneNumber.value}
                email={email.value}
                onChangeEmail={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
                onChangeTelephoneNumber={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)} />
            }>
          </Route>
          <Route path={'/create'}
            element={
              <Step1 nickname={nickname.value} sername={sername.value} name={name.value}
                onChangeNickname={(e: React.ChangeEvent<HTMLInputElement>) => nickname.onChange(e)}
                onChangeName={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                onChangeSername={(e: React.ChangeEvent<HTMLInputElement>) => sername.onChange(e)}
                onChangeSex={(e: React.ChangeEvent<HTMLInputElement>) => sex.onChange(e)}
              />}
          >
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
