# Given the triangle of consecutive odd numbers:
#              1
#           3     5
#        7     9    11
#    13    15    17    19
# 21    23    25    27    29
# ...

# Calculate the row sums of this triangle from the row index (starting at index 1)

# My Solution
def row_sum_odd_numbers(n)
  row = 1
  num = 1
  sum = 0
  while row <= n
    row.times do
      if row == n
        sum += num
      end
      num += 2
    end
    row += 1
  end
  return sum
end

puts row_sum_odd_numbers(3)

# Voted Best Practice
def row_sum_odd_numbers(n)
  return n*n*n
end