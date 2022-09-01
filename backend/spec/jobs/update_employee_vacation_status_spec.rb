require 'rails_helper'
require 'sidekiq/testing'
Sidekiq::Testing.fake!

RSpec.describe UpdateEmployeeVacationStatus, type: :job do
  describe '#perform' do
    it 'adiciona o job na fila' do
      expect { described_class.perform_async }.to change(described_class.jobs, :size).by(1)
    end

    it 'Verifica que o job UpdateEmployeeVacationStatus foi iniciado' do
      described_class.perform_async
      assert_equal described_class.to_s, Sidekiq::Queues['UpdateEmployeeVacationStatus'].first['class']
    end

    it 'Verifica que os jobs foram tirados da fila' do
      described_class.perform_async
      described_class.perform_async
      described_class.drain
      assert_equal 0, described_class.jobs.size
    end
  end
end
