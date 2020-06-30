import React, {useCallback, useMemo, useState} from 'react';
import {Button, Form, Input} from "antd";
import Link from "next/link";
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`

function LoginForm({setIsLoggedIn}) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        // antd Form에는 submit에 e.preventDefault();가 이미 적용되어 있음
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    // useMemo로 style 적용시 렌더링 최적화
    // const style = useMemo(() => ({marginTop: 10}), []);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-pw">비밀번호</label>
                <br />
                <Input name="user-pw" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

export default LoginForm;
