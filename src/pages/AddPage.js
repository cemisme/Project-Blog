import React from 'react';
import Layout from '../component/layout/Layout';
import PostAdd from '../component/module/post/PostAdd';
import { useAuth } from '../context/context-config';

const AddPage = () => {
    const { userInfo } = useAuth();
    return (
        <Layout user={userInfo}>
        <PostAdd user={userInfo}></PostAdd>
      </Layout>
    );
};

export default AddPage;