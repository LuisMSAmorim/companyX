class Vacation < ApplicationRecord
  belongs_to :employee

  validates :start_date, presence: true, comparison: { greater_than: Date.yesterday }
  validates :end_date, presence: true, comparison: { greater_than: :start_date }
end
