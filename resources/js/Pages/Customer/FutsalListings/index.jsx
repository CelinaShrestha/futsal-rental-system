import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import FutsalCard from "@/Components/FutsalCard";

export default function ViewFutsal({ auth }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <FutsalCard />
            </AuthenticatedLayout>
        </>
    );
}
