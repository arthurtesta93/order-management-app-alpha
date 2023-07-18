import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="Welcome to the Order Management App" />
        <CardContent>Check out available tasks below:</CardContent>
    </Card>
);