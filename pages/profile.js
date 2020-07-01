import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NickNameEditForm from "../components/NickNameEditForm";
import FollowList from "../components/FollowList";
import FollowerList from "../components/FollowerList";

function Profile() {
    const followerList = [{ nickname: '노네임' }, { nickname: 'nonarnee' }, { nickname: '황태영' }];
    const followingList = [{ nickname: '노네임' }, { nickname: 'nonarnee' }, { nickname: '황태영' }];
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowerList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
);
}

export default Profile;
