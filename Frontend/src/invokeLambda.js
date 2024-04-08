import AWS from "aws-sdk";
const lambda = new AWS.Lambda();

const LAMBDA_FUNCTION_NAME = "test-22-LambdaFunction-bVX3AHTIcJjU";

export const invokeLambdaFunction = async (path, body) => {
  const params = {
    FunctionName: LAMBDA_FUNCTION_NAME,
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({
      path,
      httpMethod: "POST",
      body: JSON.stringify(body),
    }),
  };

  console.log("Lambda Params: ", params);
  const data = await lambda.invoke(params).promise();
  return data;
};
