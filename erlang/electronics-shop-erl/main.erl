-module(solution).
-export([main/0]).
-import(os, [getenv/1]).

%
% Complete the getMoneySpent function below.
%
getMoneySpent(Keyboards, Drives, B) ->
  checkKeyboards(Keyboards, Drives, B).

checkKeyboards([Head|Rest], Drives, B) ->
  V = checkDrives(Head, Drives, -1, B),
  checkKeyboards(Rest, Drives, V, B).

checkKeyboards([], Drives, V, B) ->
  V;
checkKeyboards([Head|Rest], Drives, V, B) ->
  NewV = checkDrives(Head, Drives, V, B),
  checkKeyboards(Rest, Drives, NewV, B).

checkDrives(K, [], V, B) ->
  V;
checkDrives(K, [Head|Rest], V, B) ->
  NewV = checkCombo(K, Head, V, B),
  checkDrives(K, Rest, NewV, B).

checkCombo(K, D, V, B) ->
  if
    K+D > V, K+D < B+1 -> 
      K+D;
    true ->
      V
  end.

read_multiple_lines_as_list_of_strings(N) ->
    read_multiple_lines_as_list_of_strings(N, []).

read_multiple_lines_as_list_of_strings(0, Acc) ->
    lists:reverse(Acc);
read_multiple_lines_as_list_of_strings(N, Acc) when N > 0 ->
    read_multiple_lines_as_list_of_strings(N - 1, [string:chomp(io:get_line("")) | Acc]).

main() ->
    {ok, Fptr} = file:open(getenv("OUTPUT_PATH"), [write]),

    Bnm = re:split(string:chomp(io:get_line("")), "\\s+", [{return, list}, trim]),

    {B, _} = string:to_integer(lists:nth(1, Bnm)),

    {N, _} = string:to_integer(lists:nth(2, Bnm)),

    {M, _} = string:to_integer(lists:nth(3, Bnm)),

    KeyboardsTemp = re:split(string:chomp(io:get_line("")), "\\s+", [{return, list}, trim]),

    Keyboards = lists:map(fun(X) -> {I, _} = string:to_integer(X), I end, KeyboardsTemp),

    DrivesTemp = re:split(string:chomp(io:get_line("")), "\\s+", [{return, list}, trim]),

    Drives = lists:map(fun(X) -> {I, _} = string:to_integer(X), I end, DrivesTemp),

    %
    % The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    %

    MoneySpent = getMoneySpent(Keyboards, Drives, B),

    io:fwrite(Fptr, "~w~n", [MoneySpent]),

    file:close(Fptr),

    ok.
