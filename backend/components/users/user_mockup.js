export class UserMockup{
    static list = [
        {
            uuid: '4167d46e-1d7e-48eb-98a6-e75da07d4ee0',
            username: 'Pedro',
            displayName: 'Pedro Pe',
            
    "hashedPassword": "$2b$10$fYC1haOE0P3FdcuZLKpOq.aaUx7xhGhmKs23JeEJrs/SHVqsdvsQy"
        },
        {
            uuid: '828eb501-eb39-4663-82e3-fec048ef9d34',
            username: 'Ana',
            displayName: 'Ana Laura',
            
    "hashedPassword": "$2b$10$fYC1haOE0P3FdcuZLKpOq.aaUx7xhGhmKs23JeEJrs/SHVqsdvsQy"
        }
    ];

    async getList(filters, options) {
        const result = [];
        if (filters) {
            for (const item of UserMockup.list) {
                let includeItem = true;
                for (const  filterName in filters){
                    const filterValue = filters[filterName];
                    if (item[filterName] != filterValue) {
                        includeItem = false;
                        break;
                    }
                }

                if (includeItem) {
                    result.push(item);
                }
            }
        } else {
            result.push (...UserMockup.list);
        }

        if (options?.skip) {
            result.splice(0, options.skip);
        }

        if (options?.limit) {
            result.splice(options.limit, result.length);
        }

        return result;
    }

    async create(data) {
        UserMockup.list.push(data);
    }
}
