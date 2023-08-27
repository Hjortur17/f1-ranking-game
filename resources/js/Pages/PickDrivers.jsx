import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function PickDrivers({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            headerTitle={"Pick your top 12 drivers"}
            headerContent={
                <h3>Jeddah</h3>
            }
        >
            <Head title="Pick your drivers" />

            <div className="grid grid-cols-3">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </AuthenticatedLayout>
    );
}
