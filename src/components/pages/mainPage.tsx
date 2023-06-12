import React, { FC } from 'react'
import { useNavigate } from "react-router-dom";
import Input from '../atoms/input';



interface MainPageProps {
    telephoneNumber: string,
    email: string,
    onChangeTelephoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MainPage: FC<MainPageProps> = () => {
    const navigate = useNavigate();
    return (
        <div className="mainPage">
            {/* <Input label='Номер телефона' placeholder='+7 999 999-99-99'></Input>
            <Input label='Email' placeholder='tim.jennings@example.com'></Input> */}
            <button onClick={() => navigate('/create')}>
                Начать
            </button>
        </div>
    )
}

export default MainPage