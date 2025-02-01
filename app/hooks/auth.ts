import { useQuery } from "@tanstack/react-query";
import { createGraphqlClient } from "~/clients/api";
import { getCurrentUserQuery } from "~/graphql/queries/auth";

export const useCurrentUser = () => {
    return useQuery({
        queryKey: ["currentUser"],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const { getCurrentUser } = await graphqlClient.request(getCurrentUserQuery)
            return getCurrentUser
        },
    });
};