import React from 'react';

const LanguageRequirementsTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Test</th>
                        <th className="border px-4 py-2">Minimum Requirements</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">IELTS (Academic)</td>
                        <td className="border px-4 py-2">Overall band score of 6.0 with no individual band score less than 5.5</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Internet-based TOEFL (iBT)</td>
                        <td className="border px-4 py-2">Score of 60 (with a writing score of 18)</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Paper-based TOEFL</td>
                        <td className="border px-4 py-2">Score of 550 (with an essay score of 5 TWE)</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Cambridge English: ESOL</td>
                        <td className="border px-4 py-2">B2 First or B2 First for schools, or C1 Advanced or C2 Proficiency with a score of 169. No less than 162 in each skill</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">NZCEL</td>
                        <td className="border px-4 py-2">Level 4 (Academic)</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Pearson Test of English (Academic)</td>
                        <td className="border px-4 py-2">Overall band score of 50 with no individual band score less than 42</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Trinity ICE</td>
                        <td className="border px-4 py-2">ISE II with no less than distinction in any band</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Language Cert</td>
                        <td className="border px-4 py-2">C1 Expert IESOL (LRWS) with PASS and no less than PASS in each skill</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LanguageRequirementsTable;
