interface Profile {
    id: string;
    name: string;
    address: string;
}

type ProfileId = Pick<Profile, 'id'>;
type HulkProfile = Pick<Profile, 'id' | 'name'>;

var hulk_id: ProfileId = {
    id: '1'
};

var hulk: HulkProfile = {
    id: '1',
    name: '헐크',
};