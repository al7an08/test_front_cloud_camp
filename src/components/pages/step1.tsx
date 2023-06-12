import React, { FC } from 'react'
import Input from '../atoms/input'
import { useNavigate } from "react-router-dom";
import Dropdown from '../molecules/dropDown';
import MenuItem from '../atoms/menuItem';


type Item = {
    label: string;
    value: any;
}

const sex: Item[] = [
    { label: 'male', value: 'm' },
    { label: 'female', value: 'f' },
];


interface Step1Props {
    nickname: string,
    name: string,
    sername: string,
    onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeSername: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeSex: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Step1: FC<Step1Props> = ({ nickname, name, sername, onChangeName, onChangeNickname, onChangeSername, onChangeSex }) => {
    const navigate = useNavigate();
    return (
        <div className="Step1">
            <Input label='Nickname' placeholder='Enter your nickname' value={nickname} onChange={onChangeNickname}></Input>
            <Input label='Name' placeholder='Enter your name' value={name} onChange={onChangeName}></Input>
            <Input label='Sername' placeholder='Enter your sername' value={sername} onChange={onChangeSername}></Input>
            <Dropdown label={'Выберите пол'} onChange={(item) => console.log(item.label)}>
                {
                    sex.map(item => (
                        <MenuItem key={item.value} value={item}>
                            {item.label}
                        </MenuItem>
                    ))
                }
            </Dropdown>
            <button onClick={() => navigate('/main')}>Back</button>
        </div>
    )
}

export default Step1