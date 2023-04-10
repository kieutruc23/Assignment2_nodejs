import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Checkbox, Form, Input, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProductAdd = (props: { onAdd: Function }) => {
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your product name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your product price!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: 'Please upload your product image or enter a valid image URL!'
                        },

                    ]}
                >
                    <Input placeholder="Enter image URL" />
                </Form.Item>
                <Form.Item
                    label="Product Description "
                    name="description"
                    rules={[{ required: true, message: 'Please input your product description!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ProductAdd;
