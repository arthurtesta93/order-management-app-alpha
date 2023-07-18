
import { useState, useEffect } from 'react';
import { useRecordContext, fetchUtils, TextField } from 'react-admin';

const httpClient = fetchUtils.fetchJson;

type Props = {
    label: string;
}


export const OrganizationName = ({ label }: Props) => {
    const record = useRecordContext();

    type OrganizationData = {
        id: String,
        name: String,
        kind: String,
        yearly_revenue: String,
        created_at: Date,
        url: URL,
    }


    const [organizationData, setOrganizationData] = useState<OrganizationData>({} as OrganizationData)

    useEffect(() => {

        const fetchOrganizationData = async () => {
            const organizationInfo = await httpClient(record.organization);
            setOrganizationData(organizationInfo.json)
        }

        fetchOrganizationData()

    }, [record.organization])

    return organizationData.name

};
