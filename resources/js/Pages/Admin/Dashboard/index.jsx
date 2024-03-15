import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import home from "../../../../assets/images/home.png";
import Button from "@/Components/Button";
import Card from "@/Components/Card";

export default function Dashboard({ auth }) {
    return <AdminLayout user={auth}>Admin</AdminLayout>;
}
