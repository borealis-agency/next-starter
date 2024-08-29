---
to: src/api/hooks/<%= h.changeCase.camel(fileName) %>.ts
---
<% if (typeOfHook === "query") { %>
import { useQuery } from "@tanstack/react-query";
import { apiKeys } from "./apiKeys";

type <%= h.changeCase.pascal(name) %>QueryProps = {
  // TODO: Remove placeholderProp
  placeholderProp: string;
};

export const use<%= h.changeCase.pascal(name) %>Query = ({ placeholderProp }: <%= h.changeCase.pascal(name) %>QueryProps) => {
  return useQuery({
    queryKey: [apiKeys.queries.<%= h.changeCase.camel(name) %>Query, placeholderProp],
    queryFn: async () => {},
  });
};
<% } else { %>
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiKeys } from "./apiKeys";

type <%= h.changeCase.pascal(name) %>MutationProps = {
  // TODO: Remove placeholderProp
  placeholderProp: string;
};

export const use<%= h.changeCase.pascal(name) %>Mutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [apiKeys.mutations.<%= h.changeCase.camel(name) %>Mutation],
    mutationFn: async (props: <%= h.changeCase.pascal(name) %>MutationProps) => {},
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [] });
    },
    onError: async (error) => {
      console.error(error);
    },
  });
};
<% } %>
