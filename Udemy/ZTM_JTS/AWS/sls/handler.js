'use strict';

const ranks = ['>','>>','>>>', '*', '**', '***'];

module.exports.rank = async (event) => {

  const rank = event.queryStringParameters.rank;
  const rankSign = ranks[Math.min(rank, ranks.length-1)];

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': "*"
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: rankSign,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
