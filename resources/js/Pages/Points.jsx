import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Points({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            headerTitle={"Your top 6 picks"}
            headerContent={
                <h3>Bahrain</h3>
            }
        >
            <Head title="Points" />

            <table class="table-auto w-full">
                <thead>
                    <tr class="h-9 mb-2">
                        <th class="text-left px-4">Drivers name</th>
                        <th class="text-left px-4">Team</th>
                        <th class="text-right px-4">Your pick</th>
                        <th class="text-right px-4">Ended in</th>
                        <th class="text-right px-4">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="h-9 hover:font-bold ease-in-out duration-200">
                        <td class="px-4 w-80">Max Verstappen</td>
                        <td class="px-4">Red Bull</td>
                        <td class="text-right px-4">1</td>
                        <td class="text-right px-4">1</td>
                        <td class="text-right px-4">0</td>
                    </tr>
                    <tr class="h-9 hover:font-bold ease-in-out duration-200">
                        <td class="px-4 w-80">Charles Leclerc</td>
                        <td class="px-4">Ferrari</td>
                        <td class="text-right px-4">2</td>
                        <td class="text-right px-4">4</td>
                        <td class="text-right px-4">-2</td>
                    </tr>
                    <tr class="h-9 hover:font-bold ease-in-out duration-200">
                        <td class="px-4 w-80">Carlos Sainz</td>
                        <td class="px-4">Ferrari</td>
                        <td class="text-right px-4">3</td>
                        <td class="text-right px-4">DNF</td>
                        <td class="text-right px-4">-9</td>
                    </tr>
                    <tr class="h-9 hover:font-bold ease-in-out duration-200">
                        <td class="px-4 w-80">Fernando Alonso</td>
                        <td class="px-4">Aston Martin</td>
                        <td class="text-right px-4">4</td>
                        <td class="text-right px-4">4</td>
                        <td class="text-right px-4">0</td>
                    </tr>
                    <tr class="h-9 hover:font-bold ease-in-out duration-200">
                        <td class="px-4 w-80">Lewis Hamilton</td>
                        <td class="px-4">Mercendes Benz</td>
                        <td class="text-right px-4">5</td>
                        <td class="text-right px-4">3</td>
                        <td class="text-right px-4">-2</td>
                    </tr>
                    <tr class="h-9 hover:font-bold ease-in-out duration-200">
                        <td class="px-4 w-80">Pierre Gasly</td>
                        <td class="px-4">Alpine</td>
                        <td class="text-right px-4">6</td>
                        <td class="text-right px-4">12</td>
                        <td class="text-right px-4">-6</td>
                    </tr>
                    <tr class="h-9 hover:font-bold ease-in-out duration-200">
                        <td class="px-4 w-80"></td>
                        <td class="px-4"></td>
                        <td class="px-4"></td>
                        <td class="font-bold text-right px-4">Total</td>
                        <td class="text-right px-4">-19</td>
                    </tr>
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
}
