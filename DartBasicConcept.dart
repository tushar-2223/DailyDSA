void main() {
  final list1 = ["apple", "bananna", "apple", "bananna", "graps"];

  final map = <String, int>{};

  for (final fruit in list1) {
    map[fruit] = (map[fruit] ?? 0) + 1;
  }

  final result =
      map.entries
          .where((entry) => entry.value > 1)
          .map((entry) => entry.key)
          .toList();

  print(result);
}
