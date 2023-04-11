export const action = async ({request}) => {
  if (request.method !== 'POST') return '';
  try {
    let data = await request.json();
    const res = await fetch(
      'https://us11.api.mailchimp.com/3.0/lists/19e84be598/members',
      {
        method: 'POST',
        headers: {
          Authorization: 'apikey 20793bb60c47a1ea351ecfc454c5f6a6-us11',
        },
        body: JSON.stringify(data),
      },
    );

    const maichimp = await res.json();
    console.log(maichimp);
    return maichimp;
  } catch (error) {
    console.error(error);
  }
};

export const loader = async () => {
  return 'Hello Granky';
};
